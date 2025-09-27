import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';
import { 
  UserIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  BuildingOfficeIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

interface Inquiry {
  _id: string;
  subject: string;
  message: string;
  service: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const DashboardPage = () => {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: '',
    phone: '',
    company: ''
  });

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
      return;
    }

    if (user) {
      setEditData({
        name: user.name,
        phone: user.phone || '',
        company: user.company || ''
      });
      fetchInquiries();
    }
  }, [user, authLoading, router]);

  const fetchInquiries = async () => {
    try {
      const response = await axios.get('/inquiries');
      setInquiries(response.data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
      toast.error('Failed to load inquiries');
    } finally {
      setLoading(false);
    }
  };

  const handleEditProfile = async () => {
    try {
      await axios.put('/auth/profile', editData);
      toast.success('Profile updated successfully');
      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    
    try {
      await axios.delete(`/inquiries/${id}`);
      setInquiries(inquiries.filter(inquiry => inquiry._id !== id));
      toast.success('Inquiry deleted successfully');
    } catch (error) {
      toast.error('Failed to delete inquiry');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-purple-100 text-purple-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getServiceName = (service: string) => {
    const services: { [key: string]: string } = {
      'poster-design': 'Poster Design',
      'website-building': 'Website Building',
      'software-development': 'Software Development',
      'seo-branding': 'SEO & Branding',
      'social-media': 'Social Media Marketing',
      'content-marketing': 'Content Marketing',
      'other': 'Other'
    };
    return services[service] || service;
  };

  if (authLoading || loading) {
    return (
      <Layout title="Dashboard - Influex Agency">
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="spinner"></div>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Layout title="Dashboard - Influex Agency">
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.name}!</h1>
            <p className="text-gray-600">Manage your profile and track your inquiries</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Profile</h2>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-primary-600 hover:text-primary-700"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={editData.phone}
                        onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={editData.company}
                        onChange={(e) => setEditData({ ...editData, company: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={handleEditProfile}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="btn-secondary text-sm px-4 py-2"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <UserIcon className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-900">{user.name}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-900">{user.email}</span>
                    </div>
                    {user.phone && (
                      <div className="flex items-center space-x-3">
                        <PhoneIcon className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-900">{user.phone}</span>
                      </div>
                    )}
                    {user.company && (
                      <div className="flex items-center space-x-3">
                        <BuildingOfficeIcon className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-900">{user.company}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Inquiries Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Your Inquiries</h2>
                  <a
                    href="/contact"
                    className="btn-primary text-sm px-4 py-2"
                  >
                    New Inquiry
                  </a>
                </div>

                {inquiries.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <EnvelopeIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No inquiries yet</h3>
                    <p className="text-gray-600 mb-6">Start by submitting your first inquiry</p>
                    <a href="/contact" className="btn-primary">
                      Submit Inquiry
                    </a>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {inquiries.map((inquiry) => (
                      <div
                        key={inquiry._id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-semibold text-gray-900">{inquiry.subject}</h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(inquiry.status)}`}>
                                {inquiry.status.replace('-', ' ').toUpperCase()}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                              {inquiry.message}
                            </p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>Service: {getServiceName(inquiry.service)}</span>
                              <span>Created: {new Date(inquiry.createdAt).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            <button
                              onClick={() => deleteInquiry(inquiry._id)}
                              className="text-red-600 hover:text-red-700 p-1"
                              title="Delete inquiry"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;

